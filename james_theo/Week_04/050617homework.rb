
def menu

  puts "Please select the operation you wish to perform by the corresponding number. to return to menu, please type 'menu'. Please type 'result' to calculate all inputs:

  1. Addition
  2. Subtraction
  3. Multiplication
  4. Divison"

  selection = gets.to_i
  result = 0

  until gets.chomp == "menu"
    p " just before if"
    input = gets.chop
    if input == "result"
      puts result
    else
    # if selection == 1
      result += input.to_i
    end




    end

  end
  menu


    # ask for an input
    #  until input == "result"
    #    indup +
    # puts "lets do addition!"

  # elsif selection == 2
  #   # puts "lets do subtraction!"
  #   # def calculation (result -= )
  #
  #
  #     if gets.chomp == "menu"
  #      menu
  #     end
  #
  # elsif selection == 3
  #   # puts "lets do that other one!"
  #   # def calculation (result *= )
  #
  #
  #     if gets.chomp == "menu"
  #      menu
  #     end
  #
  # elsif selection == 4
  #   # puts "lets do division!"
  #   # def calculation (result /= )
  #
  #
  #     if gets.chomp == "menu"
  #      menu
  #     end
#   # end
# end
#
# menu

# # Calculator
#
# ### Explanation
# - You will be building a calculator.  A calculator can perform multiple arithmetic operations.  Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.
#
# ### Specification:
# - A user should be given a menu of operations
# - A user should be able to choose from the menu
# - A user should be able to enter numbers to perform the operation on
# - A user should be shown the result
# - This process should continue until the user selects a quit option from the menu
#
# #### Phase 1
# - Calculator functionality
# - Calculator should be able to do basic arithmetic (+,-, *, /)
#
# #### Phase 2
# - Advanced Calculator functionality
# - Calculator should be able to do basic arithmetic (exponents, square roots)
#
#
#
# # Bonus
# ## Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)
#
# ## BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight
#
# ## Trip Calculator
# Calculate a trip time and cost given inputs for
# - distance
# - miles per gallon
# - price per gallon
# - speed in miles per hour
