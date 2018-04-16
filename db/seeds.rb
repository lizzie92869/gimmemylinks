

lizzie = User.create(email: "lizzie@gmail.com", password: "lizziegmail", password_confirmation: "lizziegmail")
david = User.create(email: "david@gmail.com", password: "davidgmail", password_confirmation: "davidgmail")

list1 = List.create(name: "Rails documentation", color: "#CCFF38")
list2 = List.create(name: "Baby toys wishlist" )
list3 = List.create(name: "Interesting website designs" )
list4 = List.create(name: "Things to do around" )

link1 = Link.create(user_id: 1, list_id: 1, url: "http://edgeguides.rubyonrails.org/active_record_migrations.html", name: "doc migration",priority: "high")
link2 = Link.create(user_id: 1, list_id: 2, url: "hhttps://www.amazon.com", name: "sorter",priority: "low")
link3 = Link.create(user_id: 1, list_id: 3, url: "https://flatironschool.com/", name: "flatiron website",priority: "medium")
link4 = Link.create(user_id: 1, list_id: 4, url: "https://www.veggiegrill.com/", name: "veggie grill",priority: "high")
link5 = Link.create(user_id: 1, list_id: 1, url: "https://www.w3schools.com/tags/tag_img.asp", name: "authentfication with devise",priority: "low")
link6 = Link.create(user_id: 1, list_id: 1, url: "https://en.wikipedia.org/wiki/Active_record_pattern", name: "article AC",priority: "medium")
link6 = Link.create(user_id: 1, list_id: 2, url: "http://www.google.com", name: "new article",priority: "medium")


