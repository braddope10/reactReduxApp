# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(bio: "", name: "Bradley", email: "braddope@hotmail.com", password_digest: "123456", city: "Las Vegas", state: "NV", sex: "Male", preference: "Straight", profile_pic: "", age: 21)

Post.create(content: "wow", user_id: 5)

Comment.create(text: "what", user_id: 2, post_id: 6)