#!/usr/bin/python
# -*- coding: UTF-8 -*-
import os
import re
import requests
import json
import time
import copy

db_path = './public/db'
path = './public/wechat-page'
files = os.listdir(path)
linkPattern = re.compile(r'<a.*?href="(.*?)".*?textvalue="(.*?)".*?>.*?<\/a>')
allData = []
for file in files:
    if not os.path.isdir(file):  # 判断是否是文件夹
        year = file.replace('.html', '')
        filePath = path+"/"+file
        f = open(filePath, 'r')
        content = f.read()
        f.close()
        # 解析已经存储过的html
        dbFilePath = db_path + "/" + year+'.json'
        f1 = open(dbFilePath, 'r')
        curr_year_json = f1.read()
        f1.close()
        curr_year_list = json.loads(curr_year_json)
        # 解析html
        matchObj = linkPattern.findall(content)
        print('开始解析 %s' % year)
        if matchObj:
            linkInfos = copy.deepcopy(curr_year_list)
            for link in matchObj:
                title = link[1]
                href = link[0]
                exist = list(filter(lambda x: x.get('title') ==
                                    title and x.get('href') == href, curr_year_list))
                if not exist:
                    hrefApi = href.replace(
                        '#wechat_redirect', '&f=json').replace('http', 'https')
                    try:
                        linkContent = requests.get(
                            hrefApi, headers={'Connection': 'close'}).json()
                        linkInfo = {'title': title, 'href': href,
                                    'linkContent': linkContent}
                        time.sleep(1)
                        linkInfos.append(linkInfo)
                        print(len(linkInfos), '/', len(matchObj))
                    except:
                        json_str = json.dumps(linkInfos, ensure_ascii=False)
                        fYear = open(db_path+'/'+year+'.json', 'w')
                        fYear.write(json_str)
                        fYear.close()
            json_str = json.dumps(linkInfos, ensure_ascii=False)
            fYear = open(db_path+'/'+year+'.json', 'w')
            fYear.write(json_str)
            fYear.close()
