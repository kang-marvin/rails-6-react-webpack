# Load RVM intoa s hell session *as a function*
source ~/.rvm/scripts/rvm
rvm use 2.6.3

# Start foreman which start rails server and webapcker server
foreman start -f Procfile
