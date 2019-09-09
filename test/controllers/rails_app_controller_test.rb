require 'test_helper'

class RailsAppControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get rails_app_index_url
    assert_response :success
  end

end
