min_font = input("Min font size: ")
max_font = input("Max font size: ")
min_vw = input("Min window size: ")
max_vw = input("Max window size: ")

m = (float(max_font) - float(min_font))/(float(max_vw)/16 - float(min_vw)/16)

print(f"font-size: clamp({min_font}rem, {format(-float(min_vw)/16*m+float(min_font), '.3f')}rem + {format(m*100, '.3f')}vw, {max_font}rem);")
print(f"clamp({min_font}rem, {format(-float(min_vw)/16*m+float(min_font), '.3f')}rem + {format(m*100, '.3f')}vw, {max_font}rem)")
