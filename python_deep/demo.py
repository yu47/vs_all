from paddleocr import PaddleOCR
import os
import cv2
ocr = PaddleOCR(det_mpdel_dir="D:/git_projects/PaddleOCR/ch_ppocr_server_v2.0_det_infer/", use_gpu=False, det_limit_side_len=1500)
img = './img_50/196778030-076-001.png'
img1 = './img_50/'
img_path = './img_50/'
img_save = "C:\\Users\\yu/PycharmProjects\\Opencv\\data\\"
imgs = os.listdir(img_path)
count = 1
result = ocr.ocr(img,rec=False)
img_1 = cv2.imread(img)
def iou(bbox1, bbox2):
    """
    Calculates the intersection-over-union of two bounding boxes.
    """
    bbox1 = [float(x) for x in bbox1]
    bbox2 = [float(x) for x in bbox2]
    (x0_1, y0_1, x1_1, y1_1) = bbox1
    (x0_2, y0_2, x1_2, y1_2) = bbox2
    # get the overlap rectangle
    overlap_x0 = max(x0_1, x0_2)
    overlap_y0 = max(y0_1, y0_2)
    overlap_x1 = min(x1_1, x1_2)
    overlap_y1 = min(y1_1, y1_2)
    # check if there is an overlap
    if overlap_x1 - overlap_x0 <= 0 or overlap_y1 - overlap_y0 <= 0:
        return 0
    # if yes, calculate the ratio of the overlap to each ROI size and the unified size
    size_1 = (x1_1 - x0_1) * (y1_1 - y0_1)
    size_2 = (x1_2 - x0_2) * (y1_2 - y0_2)
    size_intersection = (overlap_x1 - overlap_x0) * (overlap_y1 - overlap_y0)
    size_union = size_1 + size_2 - size_intersection
    return size_intersection / size_union


    for line in result:
    print(line)
    f = open("./数据集/1.txt", 'a', encoding='utf-8')
    for _ in range(0, 4):
        for a in range(0, 2):
            print(str(int(line[_][a])))
            f.write(str(int(line[_][a])) + ",")
    if not os.path.exists("./data/" + img + "/" ):
        os.mkdir("./data/" + img)
    x = int(line[0][0])
    y = int(line[0][1])
    h = int(line[3][1])
    w = int(line[1][0])
    src = img_1[y: h, x: w]
    a = img.replace(".png", "")
    cv2.imwrite(img_save + img + "\\" + str(count) + ".png", src)
#     flie = open("./data/" + img1 + ".txt", "a", encoding="utf-8")
#     flie.write('{}\t{}\n'.format(str(count), line[1][0]))
    f.write("花" + "\n")
    count += 1


N =[]
Y = []


cuo = open("./数据集/1.txt", 'r', encoding='utf-8')
dui = open("./数据集/196778030-076-001.txt", 'r', encoding='utf-8')
for c in cuo:
    li = c.split(",")
    N.append(li)
for d in dui:
    li = d.split(",")
    Y.append(li)
count = 0
for a in N:
    x_1 = int(a[0])
    y_1 = int(a[1])
    y_2 = int(a[5]) 
    x_2 = int(a[4])
    h =y_2 - y_1
    w =x_2 - x_1
    for b in Y:
        l_x = int(b[0])
        l_y = int(b[1])
        l_y2 = int(b[5])
        l_x2 = int(b[4])
        l_h = l_y2 - l_y
        l_w = l_x2 - l_x
        box1 = [x_1,y_1,x_2,y_2]
        box2 = [l_x,l_y,l_x2,l_y2]
        data = iou(box1,box2)
        if  data > 0.5:
            print("The IOU is:{}".format(data))
            count += 1
print("召回率:{}".format(count/len(Y)))
print("准确率:{}".format(count/len(N)))

        