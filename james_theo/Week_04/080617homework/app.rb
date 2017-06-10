require "sinatra"
require "sinatra/reloader"
require "pry"
require "sqlite3"

def query_db( sql )
  # Create a connection to the database
  db = SQLite3::Database.new 'database.db'
  # Ask for the information in a nicer format
  db.results_as_hash = true
  # Show the SQL that was generated in the server output
  puts sql
  # Execute a line of SQL and store the result
  result = db.execute sql
  db.close

  result
end

get "/" do



  sql = "
  INSERT INTO wiggles( wiggle_colour, full_name, image, description, prior_work ) VALUES(
    'Blue Wiggle', 'Anthony Fields',
    'http://www.copmi.net.au/images/Misc/blue-wiggle.jpg',
    'used to be apart of the pop band The Cockroaches',
    'Pre-school teacher'
  );
    "

  query_db(sql)

  erb :home

end


get "/wiggles" do
  @wiggles = query_db "SELECT * FROM wiggles;"
  erb :index
end


get "/wiggles/newwiggle" do
  erb :newwiggle
end # show the New form for a wiggle


# update the animal (from the form submit)

post "/wiggles/:id" do

  sql = "UPDATE wiggles SET
wiggle_colour = '#{ params["wiggle_colour"] }',
full_name = '#{ params["full_name"] }',
image = '#{ params["image"] }',
description = '#{ params["description"] }',
prior_work = '#{ params["prior_work"] }'

WHERE id = #{ params["id"] };"

  query_db sql

  redirect "/wiggles/#{ params["id"]}"

end


get "/wiggles/:id" do
  id = params["id"]
  @wiggles = query_db "SELECT * FROM wiggles WHERE id = #{id};"

  @wiggles = @wiggles.first   # same as @wiggle[0], just get the first item

  erb :wiggles
end
