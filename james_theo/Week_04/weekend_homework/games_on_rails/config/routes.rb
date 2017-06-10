Rails.application.routes.draw do

  root 'pages#welcome'

    get '/games' => 'games#welcome'

    get '/games/magic_eight_' => 'games#magic_eight'
    get '/games/magic_eight/:question' => 'games#result'


    get '/games/secret_number' => 'games#secret_number/:guess'


end
