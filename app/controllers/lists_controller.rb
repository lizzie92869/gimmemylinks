class ListsController < ApplicationController


	def create
		# binding.pry
		@list = List.create(list_name_params)
		list_id = @list.id
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

	private

	def list_name_params
		params.require(:list).permit(:name)
	end

	def list_params
		params.require(:list).permit(:name, :user_id)
	end

end