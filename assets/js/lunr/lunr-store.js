var store = [{
        "title": "ý yerine ı görmek istiyor musunuz?",
        "excerpt":"Türkçe karakterlerin sorunsalı olan ISO-8859-9 formatıyla UTF-8 arasındaki uyuşmazlığı çözen küçük bir python scripti yazdım. Program girdi olarak ISO-8859-9 formatlanmış bir yazı alıyor ve de UTF-8 ile formatlayıp dosyaya yazıyor. Kullanımı: python convertToUnicode.py --input /dizin/dizin/dosya.srt --output /dizin/dizin/yenidosya.srt ya da python convertToUnicode.py -i /dizin/dizin/dosya.srt -o /dizin/dizin/yenidosya.srt Siz de kullanmak istiyorsanız: https://github.com/emresaglam/convertToUnicode...","categories": ["General"],
        "tags": ["linux","python","tools","türkçe","turkish"],
        "url": "https://blog.emresaglam.com/general/y-yerine-i-gormek-istiyor-musunuz/",
        "teaser": "https://blog.emresaglam.com/assets/img/emre.png"
      },{
        "title": "Replacing Unity with XFCE in Ubuntu",
        "excerpt":"Here is what I do as soon as I install a new Ubuntu instance: I remove unity desktop and replace it with XFCE. And if you want to do the same it's pretty straightforward. ;) Perform all of these as root in a terminal window, or prepend with sudo. (Look...","categories": ["General"],
        "tags": ["2016","linux","short","tips","ubuntu"],
        "url": "https://blog.emresaglam.com/general/replacing-unity-with-xfce-in-ubuntu/",
        "teaser": "https://blog.emresaglam.com/assets/img/emre.png"
      },{
        "title": "Bloomsky weather data in pymultimonaprs",
        "excerpt":"I wrote a small python script to get the BloomSky weather data and \"air\" it on APRS using pymultimonaprs.  You can find it in my github repo. Read the README.md file on how to set it up.  &nbsp;  ","categories": ["General"],
        "tags": ["aprs","bloomsky","code","opensource","weather"],
        "url": "https://blog.emresaglam.com/general/bloomsky-weather-data-in-pymultimonaprs/",
        "teaser": "https://blog.emresaglam.com/assets/img/emre.png"
      },{
        "title": "No timer in Mac OS X? No problem!",
        "excerpt":"Mac OS X doesn't come with a timer installed by default. There are bunch of timers in the App Store, you can definitely install one of those. But here is how to make one from scratch. Open terminal screen and type: sleep 5 ; say \"Time is up\" Well that's it...","categories": ["General"],
        "tags": ["command line","mac","mac OS X","terminal","tips"],
        "url": "https://blog.emresaglam.com/general/no-timer-in-mac-os-x-no-problem/",
        "teaser": "https://blog.emresaglam.com/assets/img/emre.png"
      },{
        "title": "Yaesu FTM-400XDR and Chirp",
        "excerpt":"I use Chirp. I love it. It's the only way to program my Baofeng UV-R(+) radios... Period. Also I love that I can download repeater settings according to a zip code, county, state, etc... I wanted to use Chirp for my Yaesu FTM-400XDR. However it looks like Chirp doesn't support...","categories": ["General"],
        "tags": ["ftm400","ftm400xdr","git","github","ham radio","python","tips","tricks","yaesu"],
        "url": "https://blog.emresaglam.com/general/yaesu-ftm-400xdr-and-chirp/",
        "teaser": "https://blog.emresaglam.com/assets/img/emre.png"
      },{
        "title": "iCloud Photos, Meraki and Traffic Shaping",
        "excerpt":"I turned iCloud Photo Library on this week. We have close to 250 GB of photos, videos in several different computers and mobile devices. You might have guessed it: it flooded our network since our outbound internet peaks around 6 Mbs (realistically). I needed to do something. I have at...","categories": ["general"],
        "tags": ["apple","icloud","network","tips"],
        "url": "https://blog.emresaglam.com/general/icloud-photos-meraki-and-traffic-shaping/",
        "teaser": "https://blog.emresaglam.com/assets/img/Screen-Shot-2017-09-25-at-4.39.41-PM.png"
      },{
        "title": "Air Quality Index Bot",
        "excerpt":"After the devastating Northern California wildfires, I found myself looking at AirNow multiple times a day. Also at work, like many Bay Area tech companies, we use HipChat (or Slack). Naturally I was inclined to issue a slash command to get the latest air quality index (AQI) for my area in...","categories": ["general"],
        "tags": ["api","git","github","opensource","project"],
        "url": "https://blog.emresaglam.com/general/air_quality_index_bot/",
        "teaser": "https://blog.emresaglam.com/assets/img/emre.png"
      },{
        "title": "shadowsocks auto deploy",
        "excerpt":"I wrote a cloud-init script to automate the deployment of a shadowsocks server. I shared it in a gist here. Features: Creates a non-privileged user Uploads your ssh public key to the user Adds this user to the sudoers group Disables ssh login for the root user Downloads and installs...","categories": ["general","security"],
        "tags": ["linux","security"],
        "url": "https://blog.emresaglam.com/general/security/shadowsocks-auto-deploy/",
        "teaser": "https://blog.emresaglam.com/assets/img/emre.png"
      },{
        "title": "Run pihole without raspberry pi",
        "excerpt":"I have few 24/7 running linux boxes at home. I wanted to try pi-hole. But I really didn’t want to add another computer (raspberry pi) on my network. So my initial feeling was why not try Docker? Good choice. Here is how easy it was. Pull pihole docker image $...","categories": ["general"],
        "tags": ["dns","docker","linux","pihole"],
        "url": "https://blog.emresaglam.com/general/run-pihole-without-raspberry-pi/",
        "teaser": "https://blog.emresaglam.com/assets/img/emre.png"
      },{
        "title": "So you lost a disk on a MD RAID5 array, now what?",
        "excerpt":"It happens, you just lost a disk on your RAID5 MD array, or things are not how it should look like… How do we troubleshoot this? First things first, what’s the name of your MD device. You can easily learn that by issuing: cat /proc/mdstat This should output something similar...","categories": ["General"],
        "tags": ["linux","tips"],
        "url": "https://blog.emresaglam.com/general/so-you-lost-a-disk-on-a-md-raid5-array-now-what/",
        "teaser": "https://blog.emresaglam.com/assets/img/emre.png"
      },{
        "title": "Apple watch radio",
        "excerpt":"If you’re like me and you have the radio app not working and your Apple Watch is saying: “Sign in to your Apple ID in General in the Apple Watch app on your iPhone” (And of course you are signed in), this solved my issue. Go to “Settings -&gt; iTunes...","categories": ["general"],
        "tags": ["apple","apple watch","tips","watch"],
        "url": "https://blog.emresaglam.com/general/apple-watch-radio/",
        "teaser": "https://blog.emresaglam.com/assets/img/black-and-silver-car-gear-shift-lever-437036.jpg"
      },{
        "title": "New Blog!",
        "excerpt":"I decided to say good bye to Wordpress today. Let’s see if I will regret this decision in the long run. :) I tried to move my blog to jekyll, mainly because I don’t want to manage a server side software stack (Mainly PHP, Wordpress and MYSQL). I said I...","categories": ["general"],
        "tags": ["blog","life"],
        "url": "https://blog.emresaglam.com/general/new-blog/",
        "teaser": "https://blog.emresaglam.com/assets/img/emre.png"
      },{
        "title": "GE Dishwasher parts nightmare!",
        "excerpt":"We have a GE dishwasher. Model number: PDWT380R10SS. It’s one of those that has “touch buttons” on the lid. This one was made in 2009. It’s in its glorious 11th year as I am writing this blog entry. According to Consumer Reportsthe average life of a dishwasher is 10 years....","categories": ["general"],
        "tags": ["blog","life"],
        "url": "https://blog.emresaglam.com/general/dishwasher-parts-nightmare/",
        "teaser": "https://blog.emresaglam.com/assets/img/emre.png"
      },{
        "title": "How to change your auxiliary battery on your LR4",
        "excerpt":"I probably am one of the few who likes the ECO functionality on my LR4. You stop, the engine stops. Simple. Until it doesn’t… One thing we learned from the hybrid vehicles is that we can efficiently and automatically start stop gas engines using an auxiliary battery. With hybrid vehicles...","categories": ["general"],
        "tags": ["blog","life","howto","fix","tips"],
        "url": "https://blog.emresaglam.com/general/how-to-change-your-auxiliary-battery-on-your-lr4/",
        "teaser": "https://blog.emresaglam.com/assets/img/emre.png"
      },{
        "title": "Mastodon migration",
        "excerpt":"I did a thing today and I opened a Mastodon account. I was never very active on Twitter, I will probably not be very active on Mastodon, but here is to support open standards! :) I’m interested in the decentralized way of Mastodon’s inner workings. Having a “local instance” is...","categories": ["general"],
        "tags": ["social media","life"],
        "url": "https://blog.emresaglam.com/general/mastodon-migration/",
        "teaser": "https://blog.emresaglam.com/assets/img/emre.png"
      },{
        "title": "How to setup YSF2DMR on pi-star",
        "excerpt":"In this blog entry I will talk about setting up YSF2DMR on pi-star (on a generic MMDVM device). I’ll try to be brief and not too detailed. Getting a DMR ID Go here and get a DMR ID. Go here and get a Brandmeister login. Go here and follow the...","categories": ["general"],
        "tags": ["ham radio","yaesu","dmr","pi-star"],
        "url": "https://blog.emresaglam.com/general/ysf2dmr-setup/",
        "teaser": "https://blog.emresaglam.com/assets/img/emre.png"
      }]
