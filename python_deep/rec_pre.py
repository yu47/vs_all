from paddleocr import PaddleOCR
import re
import os
import cv2
import numpy as np

def grey_linear_compute(image, p, l):
    img_gray = cv2.cvtColor(image, cv2.COLOR_RGB2GRAY)
    rows, cols = img_gray.shape
    dist = np.zeros_like(img_gray)
    for y in range(rows):
        for x in range(cols):
            pixel = img_gray[y, x]
            new_pixel = wise_element(p * pixel + l)
            dist[y, x] = new_pixel
    return dist

def rgb_linear_compute(image, p, l):
    # img_gray = cv2.cvtColor(image,cv2.COLOR_RGB2GRAY)
    image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    rows, cols, _ = image.shape
    dist = np.zeros_like(image)

    for y in range(rows):
        for x in range(cols):
            pixel = image_rgb[y, x]
            r = wise_element(p * pixel[0] + l)
            g = wise_element(p * pixel[1] + l)
            b = wise_element(p * pixel[2] + l)
            dist[y, x] = (b, g, r)
    return dist

def wise_element(value):
    dist = value
    if dist > 255:
        dist = 255
    if dist < 0:
        dist = 0
    return dist


def strQ2B(ustring):
    ss = []
    for s in ustring:
        rstring = ""
        for uchar in s:
            inside_code = ord(uchar)
            if inside_code == 12288:  # 全角空格直接转换
                inside_code = 32
            elif (inside_code >= 65281 and inside_code <= 65374):  # 全角字符（除空格）根据关系转化
                inside_code -= 65248
            rstring += chr(inside_code)
        ss.append(rstring)
    return ''.join(ss)

# ocr = PaddleOCR( rec_model_dir='D:/git_projects/PaddleOCR/ch_ppocr_server_v2.0_rec_infer/',use_angle_cls=False , use_gpu=False)
ocr = PaddleOCR( rec_model_dir='D:/git_projects/PaddleOCR/inference/rec_crnn/',use_angle_cls=False , use_gpu=False)
img_path = './predict2/predict/'




count = 0
rig=0
f = open("./predict2/image_info_A_2000.txt",'r',encoding="utf-8")
text =[]
for _ in f:
    path = _.split("	")
    
    
    """"   线性变换y=kx+b   """
#     img = cv2.imread(img_path+path[0])
#     x, y = img.shape[0:2]
#     img = cv2.resize(img, (int(y * 3), int(x * 3)))
#     img = rgb_linear_compute(img, 1.2, -36)
#     cv2.imwrite("./test.png", rgb)


#     img = cv2.imread(img_path+path[0])
#     x, y = img.shape[0:2]
#     img = cv2.resize(img, (int(y * 5), int(x * 5)))
#     imgy = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
#     kernel = cv2.getStructuringElement(cv2.MORPH_CROSS, (1,10))
#     img = cv2.erode(img, kernel, iterations=1)
#     ret, img = cv2.threshold(img, 100, 255, cv2.THRESH_BINARY)
#     img = rgb_linear_compute(img, 1.2, -40)
#     cv2.imwrite("./test.png", img, [int(cv2.IMWRITE_JPEG_QUALITY), 100])



#     result = ocr.ocr("./test.png",det=False )
    result = ocr.ocr(img_path+path[0],det=False)
    
    """全角转化为半角"""
    # res = strQ2B(result[0][0])
#     reg = "[()（）:：。，.,；]"
#     reg_pa = re.sub(reg,"",path[1].replace("\n", ""))
#     reg_res = re.sub(reg,"",result[0][0])
    reg_pa = strQ2B(result[0][0])
    reg_res = strQ2B(path[1].replace("\n", ""))
#     reg = "[()（）:：。，.,；]"
#     reg_pa = re.sub(reg,"",path[1].replace("\n", ""))
#     reg_res = re.sub(reg,"",result[0][0])
    
    
    rigth = reg_pa == reg_res
    if rigth:
        rig+=1
        os.remove(img_path+path[0])
#     else:
#         print("预测：{}\n正确：{}\n\n".format(reg_pa,reg_res))
    count += 1
#     if count > 201:
#         break
    if count%100 == 0:
        print("前{}准确率:{}".format(count,rig/count))
        print("前{}召回率:{}".format(count,rig/count))
print("准确率:{}".format(rig/count))