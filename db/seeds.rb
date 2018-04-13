# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

lizzie = User.create(email: "lizzie@gmail.com", password: "lizziegmail", password_confirmation: "lizziegmail")
lizzie = User.create(email: "david@gmail.com", password: "davidgmail", password_confirmation: "davidgmail")