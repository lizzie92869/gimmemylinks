class ListsController < ApplicationController


	def create
		# binding.pry
		@list = List.create(list_name_params)
		list_id = @list.id
		#To have the new list appear in the user's list, I need to create a fake link to link the list and the user
		@link = Link.create(user_id: params[:list][:user_id], list_id: list_id, name: "fake", url: "http://fake.com", priority: "fake")
		# binding.pry
		redirect_to list_path(@list)
	end


	def show
		# binding.pry
		@new_list = List.create
		@list = List.find(params[:id]) 
		@links = @list.links
	end

	def destroy
		@list = List.find(params[:id]) 
		@list.destroy
		redirect_to root_path
	end

	private

	def list_name_params
		params.require(:list).permit(:name)
	end

	def list_params
		params.require(:list).permit(:name, :user_id)
	end

end