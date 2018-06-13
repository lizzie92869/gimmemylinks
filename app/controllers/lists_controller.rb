
class ListsController < ApplicationController
include ApplicationHelper
before_action :find_list, :only => [:filter, :show, :destroy]
# before_action :create_list, :only => [:filter, :show]
# before_action :authenticate_user!, only: [:show]


# replace actions high_priority, recent and old setting @links = @list.links.high_priority
	# def filter
	# @links = @list.links.public_send(params[:filter]) if @list.links.respond_to? params[:filter]
	# render action: :show
	# end


	# def create
	# 	@list = List.new(list_name_params)
	# 	@list.user_id = current_user.id
	# 	@list.color = random_color 
	# 	if @list.valid?
	# 		@list.save
	# 		redirect_to new_list_link_path(@list)
	# 	else
	# 		flash[:alert]="name can't be blank or already used"
	# 		redirect_to root_path
	# 	end
			
	# end

	def index

		@lists = current_user.lists
		#creating an API end point and using to render index
		respond_to do |format|	 
		  format.html { render :"welcome/home" }
		  format.json { render json: @lists.to_json(include: :links)}
		  # format.json { render json: @lists }
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


	# def show
	# 	@links = @list.links
	# 	# creating an API end point and using it to render show
	# 	respond_to do |format|	 
	# 	  format.html { render :"welcome/home" }
	# 	  format.json { render json: @list.to_json(include: :links) }
	# 	end	    
	# 	######################################################
	# 	authenticate_user?
	# end

	# def destroy 
	# 	@list.destroy
	# 	redirect_to root_path
	# end




	# private

	def list_params
		params.require(:list).permit(:name, :user_id)
	end

	def find_list
		@list = List.find(params[:id]) 
	end

	def create_list
		@new_list = List.new
	end

	# def authenticate_user?
	# 	if current_user && @list.user_id == current_user.id
	# 	else
	# 		flash[:alert] = "You are not allow to view this page"
	# 		redirect_to root_path
	# 	end
	# end

end


