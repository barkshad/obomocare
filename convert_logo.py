from PIL import Image
import os

in_p = r'C:\Users\user\Desktop\OBOMOCARE\logo.png'
svg_dir = r'C:\Windows\System32\config\systemprofile\Desktop\pixel\packages\web\src\assets'
svg_logo = os.path.join(svg_dir, 'logo.svg')

img = Image.open(in_p).convert('RGBA')
target_w, target_h = 234, 42

# Downscale logo to fit 234x42
scale = min(target_w/img.width, target_h/img.height)
nw, nh = int(img.width*scale), int(img.height*scale)
img_resized = img.resize((nw, nh), Image.Resampling.LANCZOS)
# Center-crop to fit
ox, oy = (nw-target_w)//2, (nh-target_h)//2
cropped = img_resized.crop((ox, oy, ox+target_w, oy+target_h))
cropped.save(in_p)

print(f'Resized logo to {target_w}x{target_h}')

# Now redo SVG
import subprocess
result = subprocess.run(['python', os.path.join(os.path.dirname(in_p), 'convert_logo.py')], capture_output=True, text=True)
print(result.stdout)
if result.stderr:
    print(result.stderr)

# Read generated SVG and replace its viewBox to match
svg_p = r'C:\Users\user\Desktop\OBOMOCARE\logo_web.svg'
with open(svg_p, 'r') as f:
    svg_content = f.read()

w, h = target_w, target_h
