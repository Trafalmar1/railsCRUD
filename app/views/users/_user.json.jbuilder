json.(user, :id, :email, :username, :role)
json.token user.generate_jwt