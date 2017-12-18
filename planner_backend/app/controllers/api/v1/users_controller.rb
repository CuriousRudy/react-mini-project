class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: [:show ]


  def index
    @users = User.all
    render json: @users
  end

  def show
    render json: @user
  end

  def create
    @user = User.new(user_params)
      if @user.save
        render json: @user
      else
        render json: @user.errors, status: :unprocessable_entity
      end
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.permit(:first_name, :last_name, :email)
  end

end
