import xml.etree.ElementTree as ET
import requests

url = "https://hearthis.at/djbymistake/podcast/"
response = requests.get(url)
root = ET.fromstring(response.content)

channel = root.find("channel")
items = channel.findall("item")

# Print the first item's children tags to see available data
if items:
    first_item = items[0]
    for child in first_item:
        print(f"{child.tag}: {child.text}")
