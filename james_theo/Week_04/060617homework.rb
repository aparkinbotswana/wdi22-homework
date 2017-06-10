
# require "pry"

$train_route = {"N line" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
"L line" => ["8th", "6th", "Union Square", "3rd", "1st"],
"6 line" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]}



puts "Please specifiy the line you are beginning your journey on"

$begin_line = gets.chomp

puts "Please specifiy the station you are beginning your journey on"

$begin_station = gets.chomp

puts "Please specifiy the line you are ending your journey on"

$end_line = gets.chomp

puts "Please specifiy the station you are ending your journey on"

$end_station = gets.chomp


def union_square_index (line)

   $train_route[line].index("Union Square")
end


def station_index (line, station)

   $train_route[line].index(station)
end


begin_union_square_i_num = union_square_index($begin_line)

end_union_square_i_num = union_square_index($end_line)

begin_station_i_num = station_index($begin_line, $begin_station)

end_station_i_num = station_index($end_line, $end_station)

p begin_station_i_num
p end_station_i_num
p begin_union_square_i_num
p end_union_square_i_num

# route_first_half = train_route[begin_line].drop()
#
# h= train_route["N line"].drop(3)
# p g




# # MTA Lab
#
# ### Activity:
# - Students should create a program that models a simple subway system.
#
# - The program takes the line and stop that a user is getting on at and the line
# and stop that user is getting off at and prints:
#   + the stations the user must pass through, in order
#   + where to change lines, if necessary
#   + the total number of stops for the trip.
#
#
# ### Hints:
# * Don't worry about user input initially: get it working with hardcoded values first, and wire up the user interface once that's working
# * Scope works in a different way in Ruby, so variables that you define outside won't be accessible in a method. Maybe think about using a function to return data. Or perhaps research other types of variables
# * A symbol can't just be a number!
# * Consider diagraming the lines by sketching out the subway lines and their stops and intersection.
# * Make subway lines keys in a hash, while the values are an array of all the stops on each line.
# * The key to the lab is to find the __intersection__ of the lines at Union Square.
# * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
