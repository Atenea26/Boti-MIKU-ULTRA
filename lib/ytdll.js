import _0x3a4ed0 from'ytdl-core';import _0x58684f from'readline';import _0xea093a from'fluent-ffmpeg';import _0xd1ef48 from'fs';import{randomBytes}from'crypto';const ytIdRegex=/(?:youtube\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\?(?:\S*?&?v\=))|youtu\.be\/)([a-zA-Z0-9_-]{6,11})/;class YT{constructor(){}static ['isYTUrl']=_0x54df6f=>{return ytIdRegex['test'](_0x54df6f);};static ['getVideoID']=_0x394b70=>{if(!this['isYTUrl'](_0x394b70))throw new Error('is\x20not\x20YouTube\x20URL');return ytIdRegex['exec'](_0x394b70)[0x1];};static ['mp3']=async _0x1e0e24=>{try{if(!_0x1e0e24)throw new Error('Video\x20ID\x20or\x20YouTube\x20Url\x20is\x20required');_0x1e0e24=this['isYTUrl'](_0x1e0e24)?'https://www.youtube.com/watch?v='+this['getVideoID'](_0x1e0e24):_0x1e0e24;const {videoDetails:_0x127ae4}=await _0x3a4ed0['getInfo'](_0x1e0e24,{'lang':'id'});let _0x18efc4=_0x3a4ed0(_0x1e0e24,{'requestOptions':{'headers':{'cookie':'ISITOR_INFO1_LIVE=C0N8P8YKBPA;\x20PREF=tz=America.Bogota&f5=20000;\x20VISITOR_PRIVACY_METADATA=CgJQRRICGgA%3D;\x20YSC=F124HPwH5Tk;\x20HSID=ANMLlrOaE0U-Y9XCx;\x20SSID=A7jofnRgyop0pJcA8;\x20APISID=n6SY-W-U79WMcMi5/ANLbUtthWezCHSl58;\x20SAPISID=7I0Je63HDw5qNtsd/A6kfwXpaWpL9oWNCS;\x20__Secure-1PAPISID=7I0Je63HDw5qNtsd/A6kfwXpaWpL9oWNCS;\x20__Secure-3PAPISID=7I0Je63HDw5qNtsd/A6kfwXpaWpL9oWNCS;\x20YTSESSION-1b=ANPz9Kj3kneHXWVd/cloLDglSZTXhG+rbQ+5A7pXe4ThWYQ8rHRQr/mpDnEVOIc4PEpOo34pArbBqPItpFUmcRF7rBrbvY8o3qIyjm7pPyQcuuM=;\x20GPS=1;\x20SID=aQizKdEFw5-p5KcnHIHgPWALDWZSyYJmFsyl7wWOi7fu_X8gTdvx6Oug-zMeHzNA-0hvLw.;\x20__Secure-1PSID=aQizKdEFw5-p5KcnHIHgPWALDWZSyYJmFsyl7wWOi7fu_X8gzfBOB25007gw93sW0fZZBw.;\x20__Secure-1PSIDTS=sidts-CjIBSAxbGSjJ0ofY2vRCVz8xqU2RHXjyE-VqNeez6nkw8jvOZ5xtUFTPzutu1nM3OvSrJxAA;\x20__Secure-3PSIDTS=sidts-CjIBSAxbGSjJ0ofY2vRCVz8xqU2RHXjyE-VqNeez6nkw8jvOZ5xtUFTPzutu1nM3OvSrJxAA;\x20__Secure-3PSID=aQizKdEFw5-p5KcnHIHgPWALDWZSyYJmFsyl7wWOi7fu_X8g6hK1AfHBNbTFevBaBQPuvA.;\x20LOGIN_INFO=AFmmF2swRQIhAIuauIKMJskoIcXPzomtvy4859ECXJjXKwIL4Fwqi8M-AiBi3HsuFHlV7lQ1cmm3p0MA9MZSsdNDL3RLqyb_aLrKMw:QUQ3MjNmemZrTWlwS2dIcm81YnNzTFRwVVFlLUF6bGh1TzV0ZWpMSFRRYm9XdHdMYnFVUV9kcWNVTVF2QXpzSWROYzE4YkM1RzU2ZjdjUk1BWTFRTm5FS1lFVHpkVXplUzF1ZGhmMTJvZW9Ca2x1Y24zTDl3bG1tSEFILWlWX2ZNRDBCVm9RSm9EZnJPMkFyMUJqaE9uR2xoM3hyVXJWbWtn;\x20CONSISTENCY=AKreu9spRAFkKxEWfUje5J-netwXc64KTkz8ZxGkb2fS0jSkvw7HS3ZlNxyUNMoWb1_0Kzj4kSS6Wb0tulfITpFGHwYqDQyEvRz4lyfhoJV4U9Pa1V7XYEzG5c8QhUyn-KE21gCuwrCyYoLt295cpHM;\x20SIDCC=APoG2W_12yoyWkHPHg7DjiiKJB01vkwulDW9v2gIuS0mUCIpDl7SGkQ8ywiYcwBXal5jnLxZ01s;\x20__Secure-1PSIDCC=APoG2W9XogiNUjt9CjAlbVSb0YTrBJlo_rvOXGqodWmCwyDW_3SPyDLi9b1Co99YVhvhXvlWWPY;\x20__Secure-3PSIDCC=APoG2W8Koq32WwziWG7m1gPuRhj8dxVpdIFrjbUM6rA2vH7wUY-cE16wy6XKz8QfLOuyKshzVjJa'}},'filter':'audioonly','quality':0x8c}),_0x4d2457='./tmp/'+randomBytes(0x3)['toString']('hex')+'.mp3',_0x154ca3;_0x18efc4['once']('response',()=>{_0x154ca3=Date['now']();}),_0x18efc4['on']('progress',(_0x1d3af5,_0x1f08f9,_0x26ed8f)=>{const _0x1e115d=_0x1f08f9/_0x26ed8f,_0x42dce8=(Date['now']()-_0x154ca3)/0x3e8/0x3c,_0x4a7128=_0x42dce8/_0x1e115d-_0x42dce8;_0x58684f['cursorTo'](process['stdout'],0x0),process['stdout']['write']((_0x1e115d*0x64)['toFixed'](0x2)+'%\x20downloaded\x20'),process['stdout']['write']('('+(_0x1f08f9/0x400/0x400)['toFixed'](0x2)+'MB\x20of\x20'+(_0x26ed8f/0x400/0x400)['toFixed'](0x2)+'MB)\x0a'),process['stdout']['write']('running\x20for:\x20'+_0x42dce8['toFixed'](0x2)+'minutes'),process['stdout']['write'](',\x20estimated\x20time\x20left:\x20'+_0x4a7128['toFixed'](0x2)+'minutes\x20'),_0x58684f['moveCursor'](process['stdout'],0x0,-0x1);}),_0x18efc4['on']('end',()=>process['stdout']['write']('\x0a\x0a')),_0x18efc4['on']('error',_0x513b9a=>console['log'](_0x513b9a));const _0x1ed8a4=await new Promise(_0x3826ac=>{_0xea093a(_0x18efc4)['audioFrequency'](0xac44)['audioChannels'](0x2)['audioBitrate'](0x80)['audioCodec']('libmp3lame')['audioQuality'](0x5)['toFormat']('mp3')['save'](_0x4d2457)['on']('end',()=>{_0x3826ac(_0x4d2457);});});return{'meta':{'channelUrl':_0x127ae4['author']['channel_url'],'views':_0x127ae4['viewCount'],'category':_0x127ae4['category'],'id':_0x127ae4['videoId'],'url':_0x127ae4['video_url'],'publicDate':_0x127ae4['publishDate'],'uploadDate':_0x127ae4['uploadDate'],'keywords':_0x127ae4['keywords'],'title':_0x127ae4['title'],'channel':_0x127ae4['author']['name'],'seconds':_0x127ae4['lengthSeconds'],'image':_0x127ae4['thumbnails']['slice'](-0x1)[0x0]['url']},'path':_0x1ed8a4,'size':_0xd1ef48['statSync'](_0x4d2457)['size']};}catch(_0x340bdd){throw _0x340bdd;}};static ['mp4']=async _0x4ff422=>{try{if(!_0x4ff422)throw new Error('Video\x20ID\x20or\x20YouTube\x20Url\x20is\x20required');_0x4ff422=this['isYTUrl'](_0x4ff422)?'https://www.youtube.com/watch?v='+this['getVideoID'](_0x4ff422):_0x4ff422;const {videoDetails:_0x5de118}=await _0x3a4ed0['getInfo'](_0x4ff422,{'lang':'id'});console['log'](_0x5de118);let _0x21e9f9=_0x3a4ed0(_0x4ff422,{'requestOptions':{'headers':{'cookie':'ISITOR_INFO1_LIVE=C0N8P8YKBPA;\x20PREF=tz=America.Bogota&f5=20000;\x20VISITOR_PRIVACY_METADATA=CgJQRRICGgA%3D;\x20YSC=F124HPwH5Tk;\x20HSID=ANMLlrOaE0U-Y9XCx;\x20SSID=A7jofnRgyop0pJcA8;\x20APISID=n6SY-W-U79WMcMi5/ANLbUtthWezCHSl58;\x20SAPISID=7I0Je63HDw5qNtsd/A6kfwXpaWpL9oWNCS;\x20__Secure-1PAPISID=7I0Je63HDw5qNtsd/A6kfwXpaWpL9oWNCS;\x20__Secure-3PAPISID=7I0Je63HDw5qNtsd/A6kfwXpaWpL9oWNCS;\x20YTSESSION-1b=ANPz9Kj3kneHXWVd/cloLDglSZTXhG+rbQ+5A7pXe4ThWYQ8rHRQr/mpDnEVOIc4PEpOo34pArbBqPItpFUmcRF7rBrbvY8o3qIyjm7pPyQcuuM=;\x20GPS=1;\x20SID=aQizKdEFw5-p5KcnHIHgPWALDWZSyYJmFsyl7wWOi7fu_X8gTdvx6Oug-zMeHzNA-0hvLw.;\x20__Secure-1PSID=aQizKdEFw5-p5KcnHIHgPWALDWZSyYJmFsyl7wWOi7fu_X8gzfBOB25007gw93sW0fZZBw.;\x20__Secure-1PSIDTS=sidts-CjIBSAxbGSjJ0ofY2vRCVz8xqU2RHXjyE-VqNeez6nkw8jvOZ5xtUFTPzutu1nM3OvSrJxAA;\x20__Secure-3PSIDTS=sidts-CjIBSAxbGSjJ0ofY2vRCVz8xqU2RHXjyE-VqNeez6nkw8jvOZ5xtUFTPzutu1nM3OvSrJxAA;\x20__Secure-3PSID=aQizKdEFw5-p5KcnHIHgPWALDWZSyYJmFsyl7wWOi7fu_X8g6hK1AfHBNbTFevBaBQPuvA.;\x20LOGIN_INFO=AFmmF2swRQIhAIuauIKMJskoIcXPzomtvy4859ECXJjXKwIL4Fwqi8M-AiBi3HsuFHlV7lQ1cmm3p0MA9MZSsdNDL3RLqyb_aLrKMw:QUQ3MjNmemZrTWlwS2dIcm81YnNzTFRwVVFlLUF6bGh1TzV0ZWpMSFRRYm9XdHdMYnFVUV9kcWNVTVF2QXpzSWROYzE4YkM1RzU2ZjdjUk1BWTFRTm5FS1lFVHpkVXplUzF1ZGhmMTJvZW9Ca2x1Y24zTDl3bG1tSEFILWlWX2ZNRDBCVm9RSm9EZnJPMkFyMUJqaE9uR2xoM3hyVXJWbWtn;\x20CONSISTENCY=AKreu9spRAFkKxEWfUje5J-netwXc64KTkz8ZxGkb2fS0jSkvw7HS3ZlNxyUNMoWb1_0Kzj4kSS6Wb0tulfITpFGHwYqDQyEvRz4lyfhoJV4U9Pa1V7XYEzG5c8QhUyn-KE21gCuwrCyYoLt295cpHM;\x20SIDCC=APoG2W_12yoyWkHPHg7DjiiKJB01vkwulDW9v2gIuS0mUCIpDl7SGkQ8ywiYcwBXal5jnLxZ01s;\x20__Secure-1PSIDCC=APoG2W9XogiNUjt9CjAlbVSb0YTrBJlo_rvOXGqodWmCwyDW_3SPyDLi9b1Co99YVhvhXvlWWPY;\x20__Secure-3PSIDCC=APoG2W8Koq32WwziWG7m1gPuRhj8dxVpdIFrjbUM6rA2vH7wUY-cE16wy6XKz8QfLOuyKshzVjJa'}},'filter':'audioandvideo','quality':'highestvideo'}),_0xe2f36a='./tmp/'+randomBytes(0x3)['toString']('hex')+'.mp4',_0x506fdd;_0x21e9f9['once']('response',()=>{_0x506fdd=Date['now']();}),_0x21e9f9['on']('progress',(_0x254175,_0x487b1a,_0x1583b7)=>{const _0x1531db=_0x487b1a/_0x1583b7,_0xd0883b=(Date['now']()-_0x506fdd)/0x3e8/0x3c,_0x213fcc=_0xd0883b/_0x1531db-_0xd0883b;_0x58684f['cursorTo'](process['stdout'],0x0),process['stdout']['write']((_0x1531db*0x64)['toFixed'](0x2)+'%\x20downloaded\x20'),process['stdout']['write']('('+(_0x487b1a/0x400/0x400)['toFixed'](0x2)+'MB\x20of\x20'+(_0x1583b7/0x400/0x400)['toFixed'](0x2)+'MB)\x0a'),process['stdout']['write']('running\x20for:\x20'+_0xd0883b['toFixed'](0x2)+'minutes'),process['stdout']['write'](',\x20estimated\x20time\x20left:\x20'+_0x213fcc['toFixed'](0x2)+'minutes\x20'),_0x58684f['moveCursor'](process['stdout'],0x0,-0x1);}),_0x21e9f9['on']('end',()=>process['stdout']['write']('\x0a\x0a')),_0x21e9f9['on']('error',_0x7dfb28=>console['log'](_0x7dfb28));const _0xb52554=await new Promise(_0x5f0124=>{_0xea093a(_0x21e9f9)['toFormat']('mp4')['save'](_0xe2f36a)['on']('end',()=>{_0x5f0124(_0xe2f36a);});});return{'meta':{'channelUrl':_0x5de118['author']['channel_url'],'views':_0x5de118['viewCount'],'category':_0x5de118['category'],'id':_0x5de118['videoId'],'url':_0x5de118['video_url'],'publicDate':_0x5de118['publishDate'],'uploadDate':_0x5de118['uploadDate'],'keywords':_0x5de118['keywords'],'title':_0x5de118['title'],'channel':_0x5de118['author']['name'],'seconds':_0x5de118['lengthSeconds'],'image':_0x5de118['thumbnails']['slice'](-0x1)[0x0]['url']},'path':_0xb52554,'size':_0xd1ef48['statSync'](_0xe2f36a)['size']};}catch(_0x5140ce){throw _0x5140ce;}};}export default YT;