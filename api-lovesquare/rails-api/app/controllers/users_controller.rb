class UsersController < ApplicationController
  # before_action :set_user, only: [:show, :update, :destroy]

  before_action :authorized, only: [:auto_login]

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  # def show
  #   render json: @user
  # end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.valid?
      token = encode_token({user_id: @user.id})
      render json: {user: @user, token: token}
    else
      render json: {error: "Invalid username or password"}
    end
  end

  
  # LOGGING IN
  def login
    @user = User.find_by(email: params[:email])

    if @user && @user authenticate(params[:password])
      token = encode_token({user_id: @user.id})
      render json: {user: @user, token: token}
    else
      render json {error: "Invalid username or password"}
    end
  end


  # AUTO LOGIN
  def auto_login
    render json: @user
  end



  # PATCH/PUT /users/1
  # def update
  #   if @user.update(user_params)
  #     render json: @user
  #   else
  #     render json: @user.errors, status: :unprocessable_entity
  #   end
  # end

  # DELETE /users/1
  # def destroy
  #   @user.destroy
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:email, :password_digest)
    end
end
