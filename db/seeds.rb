# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

lizzie = User.create(email: "lizzie@gmail.com", password: "lizziegmail", password_confirmation: "lizziegmail")
david = User.create(email: "david@gmail.com", password: "davidgmail", password_confirmation: "davidgmail")

list1 = List.create(user_id: 1, link_id: 1, name: "Rails documentation" )
list2 = List.create(user_id: 1, link_id: 2, name: "Baby toys wishlist" )
list3 = List.create(user_id: 1, link_id: 3, name: "Interesting website designs" )
list4 = List.create(user_id: 1, link_id: 4, name: "Things to do around" )
list5 = List.create(user_id: 1, link_id: 5, name: "Houses for sale" )

link1 = Link.create(url: "http://www.ecosia.org", name: "doc migration",priority: "high")
link2 = Link.create(url: "http://www.ecosia.org", name: "sorter",priority: "low")
link3 = Link.create(url: "http://www.ecosia.org", name: "flatiron website",priority: "medium")
link4 = Link.create(url: "http://www.ecosia.org", name: "veggie grill",priority: "high")
link5 = Link.create(url: "http://www.ecosia.org", name: "article AC",priority: "medium")
link6 = Link.create(url: "http://www.ecosia.org", name: "authentfication with devise",priority: "low")





link_clothes = Link.create(url: "http://www.ecosia.org/search?q=google&addon=chrome&addonversion=2.0.3", name: "summer fashion",priority: "high")
link_clothes2 = Link.create(url: "https://www.ecosia.org/search?q=google&addon=chrome&addonversion=2.0.3", name: "summer fashion2",priority: "low")