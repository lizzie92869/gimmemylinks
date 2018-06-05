class ListsController < ApplicationController
include ApplicationHelper
before_action :find_list, :only => [:filter, :show, :destroy]
before_action :create_list, :only => [:filter, :show]
# before_action :authenticate_user!, only: [:show]

# replace actions high_priority, recent and old setting @links = @list.links.high_priority
	def filter
	@links = @list.links.public_send(params[:filter]) if @list.links.respond_to? params[:filter]
	render action: :show
	end


	def create
		@list = List.new(list_name_params)
		@list.user_id = current_user.id
		@list.color = random_color 
		#To have the new list appear in the user's list, I need to create a fake link to link the list and the user
		#@link = Link.create(user: current_user, list: @list, name: "Create a new link", url: "http://socialmediacombo.net/wp-content/uploads/2015/05/13-512.png", priority: "medium")
				
		if @list.valid?
		redirect_to new_list_link_path(@list)
		else
		flash[:alert]="name can't be blank or already used"
		redirect_to root_path
		end
			
	end


	def show
		@links = @list.links
		# creating an API end point and using it to render show
		respond_to do |format|	 
		  format.html { render :show }
		  format.json { render json: @list.to_json
		end	    
		######################################################
		authenticate_user?
	end

	def destroy 
		@list.destroy
		redirect_to root_path
	end



	private

	def list_name_params
		params.require(:list).permit(:name)
	end

	def find_list
		@list = List.find(params[:id]) 
	end

	def create_list
		@new_list = List.new
	end

	def authenticate_user?
		if current_user && @list.user_id == current_user.id
		else
			flash[:alert] = "You are not allow to view this page"
			redirect_to root_path
		end
	end

end


