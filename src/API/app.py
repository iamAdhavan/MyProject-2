from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from werkzeug.security import generate_password_hash

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend-backend communication

# MongoDB Connection
MONGO_URI = "mongodb://localhost:27017"
client = MongoClient(MONGO_URI)
db = client['Project']  # Replace with your database name
users_collection = db['validation']  # Replace with your collection name


@app.route('/api/signup', methods=['POST'])
def signup():
    try:
        # Parse the request body
        data = request.json
        email = data.get('email')
        password = data.get('password')

        # Validation
        if not email or not password:
            return jsonify({'error': 'Email and password are required'}), 400

        # Check if the email already exists
        if users_collection.find_one({'email': email}):
            return jsonify({'error': 'Email already exists'}), 400

        # Hash the password
        hashed_password = generate_password_hash(password)

        # Save user to MongoDB
        user = {'email': email, 'password': hashed_password}
        users_collection.insert_one(user)

        return jsonify({'message': 'User registered successfully'}), 201

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'error': 'Internal server error'}), 500


if __name__ == '__main__':
    app.run(debug=True)
