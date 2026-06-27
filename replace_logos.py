from PIL import Image
import os
import base64

in_p = r'C:\Users\user\Desktop\OBOMOCARE\logo.png'
svg_dir = r'C:\Windows\System32\config\systemprofile\Desktop\pixel\packages\web\src\assets'
svg_files = ['logo-dark.svg', 'logo-light.svg', 'logo-ornate-dark.svg', 'logo-ornate-light.svg']
target_w, target_h = 234, 42

# Resize logo to fit 234x42
img = Image.open(in_p).convert('RGBA')
scale = min(target_w/img.width, target_h/img.height)
nw, nh = int(img.width*scale), int(img.height*scale)
img_resized = img.resize((nw, nh), Image.Resampling.LANCZOS)
ox, oy = max(0, (nw-target_w)//2), max(0, (nh-target_h)//2)
cropped = img_resized.crop((ox, oy, ox+target_w, oy+target_h))

# Save resized version
resized = r'C:\Users\user\Desktop\OBOMOCARE\logo_234x42.png'
cropped.save(resized)
print(f'Saved resized logo: {cropped.size}')

# Encode to base64
with open(resized, 'rb') as f:
    b64 = base64.b64encode(f.read()).decode()

# Create SVG with embedded PNG
svg_template = f'''<svg width="{target_w}" height="{target_h}" viewBox="0 0 {target_w} {target_h}" xmlns="http://www.w3.org/2000/svg">
  <image width="{target_w}" height="{target_h}" href="data:image/png;base64,{b64}"/>
</svg>'''

for fname in svg_files:
    out_path = os.path.join(svg_dir, fname)
    with open(out_path, 'w') as f:
        f.write(svg_template)
    print(f'Written: {out_path}')

print('Done. All 4 logo SVG files replaced with OBOMOCARE logo.')
