class ListsController < ApplicationController
include ApplicationHelper
before_action :find_list, :only => [:high_priority, :recent, :old, :show, :destroy]
before_action :create_list, :only => [:high_priority, :recent, :old, :show]

	# def filter(method_name)
	# @list.links.public_send(method_name) if @list.links.respond_to? method_name
	# render action: :show
	# end

	def high_priority
		@links = @list.links.high_priority
		render action: :show
	end

	def recent
		@links = @list.links.recent
		render action: :show
	end

	def old
		@links = @list.links.old
		render action: :show
	end

	def create
		@list = List.create(list_name_params)
		list_id = @list.id
		@list.color = random_color 
		#To have the new list appear in the user's list, I need to create a fake link to link the list and the user
		@link = Link.create(user_id: params[:list][:user_id], list_id: list_id, name: "Create a new link", url: "http://socialmediacombo.net/wp-content/uploads/2015/05/13-512.png", priority: "medium")
				if @list.save 
			redirect_to new_list_link_path(@list)
		else
			flash[:alert]="name can't be blank"
			redirect_to root_path
		end
	end


	def show
		@links = @list.links	
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
		@new_list = List.create
	end

end


