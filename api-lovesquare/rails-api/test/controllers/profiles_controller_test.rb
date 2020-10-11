require 'test_helper'

class ProfilesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @profile = profiles(:one)
  end

  test "should get index" do
    get profiles_url, as: :json
    assert_response :success
  end

  test "should create profile" do
    assert_difference('Profile.count') do
      post profiles_url, params: { profile: { age: @profile.age, bio: @profile.bio, city: @profile.city, name: @profile.name, preference: @profile.preference, profile_pic: @profile.profile_pic, sex: @profile.sex, state: @profile.state, user_id: @profile.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show profile" do
    get profile_url(@profile), as: :json
    assert_response :success
  end

  test "should update profile" do
    patch profile_url(@profile), params: { profile: { age: @profile.age, bio: @profile.bio, city: @profile.city, name: @profile.name, preference: @profile.preference, profile_pic: @profile.profile_pic, sex: @profile.sex, state: @profile.state, user_id: @profile.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy profile" do
    assert_difference('Profile.count', -1) do
      delete profile_url(@profile), as: :json
    end

    assert_response 204
  end
end