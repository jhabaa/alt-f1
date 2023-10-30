import random

objects = []
for i in range(5):
    obj = {
        "date": "2022-01-0" + str(i+1),
        "note": "This is note " + str(i+1),
        "rappel_hour": str(random.randint(1, 12)) + ":00 " + random.choice(["AM", "PM"]),
        "country": "Country " + str(i+1),
        "mail_specified": random.choice([True, False]),
        "city": "City " + str(i+1),
        "description": "This is description " + str(i+1),
        "full_address": str(random.randint(1, 1000)) + " " + "Street " + str(i+1),
        "document_version": random.randint(1, 10),
        "title": "Object " + str(i+1),
        "date_timestamp": 1641020400 + i,
        "zip_code": "Zip " + str(i+1),
        "archived": random.choice([True, False]),
        "datetime": "2022-01-0" + str(i+1) + " " + str(random.randint(1, 12)) + ":00:00 " + random.choice(["AM", "PM"]),
        "expired": random.choice([True, False]),
        "file": "file" + str(i+1) + ".pdf",
        "province": "Province " + str(i+1),
        "category_id": "Category " + str(i+1),
        "last_update_timestamp": 1641020400 + i,
        "street": "Street " + str(i+1),
        "price": round(random.uniform(100000, 500000), 2),
        "particulier": random.choice([True, False]),
        "id": "ID " + str(i+1),
        "state_id": "State " + str(i+1),
        "lang": "en",
        "owner_tel": "555-555-555" + str(i+1),
        "rappel_date": "2022-01-0" + str(i+1),
        "rappel_date_timestamp": 1641020400 + i,
        "last_update_date": "2022-01-0" + str(i+1),
        "m_2": random.randint(500, 2000),
        "website": "www.example" + str(i+1) + ".com",
        "tel_specified": random.choice([True, False]),
        "owner_name": "Owner " + str(i+1),
        "last_update_datetime": "2022-01-0" + str(i+1) + " " + str(random.randint(1, 12)) + ":00:00 " + random.choice(["AM", "PM"]),
        "created_by": "Created by " + str(i+1),
        "picture": "picture" + str(i+1) + ".jpg",
        "url": "www.example" + str(i+1) + ".com/object" + str(i+1),
        "address_number": str(random.randint(1, 1000)),
        "cert_peb_specified": random.choice([True, False]),
        "sale": random.choice([True, False]),
        "deleted": random.choice([True, False]),
        "province_id": "Province ID " + str(i+1),
        "category": "Category " + str(i+1),
        "website_id": "Website ID " + str(i+1),
        "country_id": "Country ID " + str(i+1)
    }
    objects.append(obj)

#flask init
from flask import Flask, jsonify, render_template
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html', objects=objects)

#run
if __name__ == "__main__":
    app.run(host="0.0.0.0")
