class KeyboardDemosController < ApplicationController
  def demo1

  end

  def text
  	respond_to do |format|
      format.html #looks for views/books/index.html.erb
      format.js {render layout: false}  #looks for views/books/index.js.erb
    end
  end

  def demo2

  end
end
