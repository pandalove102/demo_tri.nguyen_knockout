<div class="container">
	<div class="row" kb-inject="BaseController">
    <form>
    <div class="form-group">
        <label for="exampleInputEmail1">Title</label>
        <input type="text" class="form-control" data-bind="value: b300ViewModel.title">
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1">Description</label>
        <input type="text" class="form-control" data-bind="value: b300ViewModel.description">
    </div>
    
    <button type="button" class="btn btn-primary" data-bind="click: onSave">Submit</button>

    </form>

        <table class="table">
            <caption>
                <!-- <a title="" class="btn btn-primary btn-rounded btn-outline" data-bind="{click:$parent.onAdd}">Add</a> -->
            </caption>
            <thead>
                <tr>
                    <td>STT</td>
                    <td>Title</td>
                    <td>Image</td>
                    <td>Description</td>
                    <td>Action</td>
                </tr>
            </thead>
            
            <tbody data-bind="foreach: {data: b300Collection, as: 'item' }">
                <tr>
                    <td><span data-bind="text: $index() + 1"></span></td>
                    <td><span data-bind="text: item.title()"></span></td>
                    <td><span data-bind="text: item.image"></span></td>
                    <td><span data-bind="text: item.description()"></span></td>
                    <td>
                        <a class="btn btn-warning btn-rounded btn-outline btn-sm" data-bind="{click:$parent.onRemove}"> Delete</a>
                        <!-- <a title="" class="btn btn-primary btn-rounded btn-outline" data-bind="{click:$parent.onAdd}">Add</a>
                        <a title="" class="btn btn-primary btn-rounded btn-outline" data-bind="{click:onEdit}">Edit</a> -->
                    </td>
                </tr>
            </tbody>
            
        </table>
    </div>
 </div>
