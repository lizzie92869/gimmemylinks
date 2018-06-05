

lizzie = User.create(email: "lizzie@gmail.com", password: "lizziegmail", password_confirmation: "lizziegmail")
david = User.create(email: "david@gmail.com", password: "davidgmail", password_confirmation: "davidgmail")

list1 = List.create(name: "Rails documentation", user_id: 1, color: "#CCFF38")
list2 = List.create(name: "Baby toys wishlist", user_id: 1, color: "#CCFF38" )
list3 = List.create(name: "Interesting website designs", user_id: 1, color: "#CCFF38" )
list4 = List.create(name: "Things to do around", user_id: 1, color: "#CCFF38" )

link1 = Link.create(user_id: 1, list_id: 1, url: "http://edgeguides.rubyonrails.org/active_record_migrations.html", name: "doc migration",priority: 1)
link2 = Link.create(user_id: 1, list_id: 2, url: "hhttps://www.amazon.com", name: "sorter",priority: 3)
link3 = Link.create(user_id: 1, list_id: 3, url: "https://flatironschool.com/", name: "flatiron website",priority: 2)
link4 = Link.create(user_id: 1, list_id: 4, url: "https://www.veggiegrill.com/", name: "veggie grill",priority: 1)
link5 = Link.create(user_id: 1, list_id: 1, url: "https://www.w3schools.com/tags/tag_img.asp", name: "authentfication with devise",priority: 3)
link6 = Link.create(user_id: 1, list_id: 1, url: "https://en.wikipedia.org/wiki/Active_record_pattern", name: "article AC",priority: 2)
link6 = Link.create(user_id: 1, list_id: 2, url: "http://www.google.com", name: "new article",priority: 2)


