
class ListsController < ApplicationController
include ApplicationHelper
before_action :find_list, :only => [:show, :destroy]
# before_action :create_list, :only => [:filter, :show]
# before_action :authenticate_user!, only: [:show]


# replace actions high_priority, recent and old setting @links = @list.links.high_priority
	# def filter
	# @links = @list.links.public_send(params[:filter]) if @list.links.respond_to? params[:filter]
	# render action: :show
	# end


	def index

		@lists = current_user.lists
		#creating an API end point and using to render index
		respond_to do |format|	 
		  format.html { render :"welcome/home" }
		  # format.json { render json: @lists.to_json(include: :links)}
		  format.json { render json: @lists }
		end
	end

	def create
    @list = List.new(list_params)
    current_user.lists<<@list
	    if @list.save
	    	render json: @list, status: 201
	    else
	    	render json: @list.errors, status: 422
	    end 
  	end


	def destroy 
		@list.destroy
		redirect_to root_path
	end


	private

	def list_params
		params.require(:list).permit(:name, :color, :user_id)
	end

	def find_list
		@list = List.find(params[:id]) 
	end

	# def authenticate_user?
	# 	if current_user && @list.user_id == current_user.id
	# 	else
	# 		flash[:alert] = "You are not allow to view this page"
	# 		redirect_to root_path
	# 	end
	# end

end


