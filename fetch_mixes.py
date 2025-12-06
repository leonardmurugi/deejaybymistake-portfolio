import xml.etree.ElementTree as ET
import requests
import json
from datetime import datetime

url = "https://hearthis.at/djbymistake/podcast/"
response = requests.get(url)
root = ET.fromstring(response.content)

channel = root.find("channel")
items = channel.findall("item")

mixes = []
for item in items:
    title = item.find("title").text
    if "DJ By Mistake" in title and "Livestream" not in title and "Drunkin" not in title and len(items) > 3:
         # Some titles might be generic, but let's take them all for now and clean up manually if needed
         pass
    
    # Clean title
    title = title.replace("<![CDATA[", "").replace("]]>", "").strip()
    
    pub_date = item.find("pubDate").text
    # Format date: "Fri, 28 Jul 2023 20:24:59 +0200" -> "Jul 2023"
    try:
        dt = datetime.strptime(pub_date, "%a, %d %b %Y %H:%M:%S %z")
        formatted_date = dt.strftime("%b %Y")
    except:
        formatted_date = pub_date

    image = item.find("itunes:image", namespaces={"itunes": "http://www.itunes.com/dtds/podcast-1.0.dtd"})
    image_url = image.attrib["href"] if image is not None else ""
    
    # Try different image sizes/variants if known? The current one is 1400x1400 which is good.

    mixes.append({
        "title": title,
        "genre": "Mix", # Default, hard to extract from RSS unless description has it
        "date": formatted_date,
        "image": image_url,
         "link": item.find("link").text
    })

print(json.dumps(mixes, indent=2))
