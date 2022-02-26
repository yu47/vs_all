import cv2
import numpy as np
import requests
import pytesseract
import re
from bs4 import BeautifulSoup
url = "http://125.88.59.131:10001/qs/index_gz.jsp?wlanacip=183.36.223.81&wlanuserip=172.25.145.215"
headers = {"User-Agent": "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0"}
s=requests.session()
img = s.get(url).text
T=BeautifulSoup(img,"lxml")
T=T.find("div",class_="am-u-sm-3 am-u-md-3 am-u-code-3")
T=T.find("img",id="image_code")
T=re.findall('/common/(.*?)"/>',str(T))
img = s.get(url="http://125.88.59.131:10001/common/"+T[0])

with open("D:/code.png" , 'wb') as f:
    f.write(img.content)
img = cv2.imread("D:/code.png")
img = cv2.resize(img, (0, 0), fx=3, fy=3, interpolation=cv2.INTER_CUBIC)
gray = cv2.cvtColor(img,cv2.COLOR_RGB2GRAY)
ret,gray = cv2.threshold(gray, 175, 255,0)
kernel = np.ones((2, 2), np.uint8)
img_dilate = cv2.dilate(gray, kernel)

img_dilate = cv2.medianBlur(img_dilate,7,7);
# cv2.namedWindow("Image")
# cv2.imshow("Image", img_dilate)
code=pytesseract.image_to_string(img_dilate)
code=code.replace(" ","")
code=re.findall("\w*",code)
# print(code[0])

data={
'wlanuserip':'172.25.145.215',
'wlanacip':'183.36.223.81',
'username':'19124334562',
'password':'MDExODMwNzg=',
'code':code[0],

}
url_login = "http://125.88.59.131:10001/ajax/login"
login=s.post(url=url_login,headers=headers,data=data).json()
# print(login["resultInfo"])
print(login)
cv2.waitKey(0)
