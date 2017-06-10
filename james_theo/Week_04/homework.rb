require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'HTTParty'

get "/layout" do
  erb :layout
end


get "/display_poster" do
  erb :display_poster
end
