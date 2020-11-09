# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.create(cashier: "Pepe", guest: "juan", content: "", amountpaid: 420, amountofpeople: 2, occupationperiod: 1, beds: 1, roomnumber: 30)

Comment.create(associate: "Nena", text: "Cleaned room at 12:00PM", post_id: 1)