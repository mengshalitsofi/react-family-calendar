# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Event.create([
    { description: "Clean up description", title: "Clean up", day: 13, month: 4, year: 2021 },
    { description: "Pick up ballet clothes on the way", title: "Ballet class!", day: 15, month: 4, year: 2021 },
    { description: "Buy some milk", title: "Supermarket", day: 15, month: 4, year: 2021 },
    { description: "June Description", title: "June title", day: 15, month: 5, year: 2021 },
])