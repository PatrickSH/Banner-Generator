<div class="texts control card">
    <div class="card-header" id="headingOne">
        <h5 class="mb-0">
            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Content
            </button>
        </h5>
    </div>
    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
        <div class="card-body">
            <div class="form-group">
                <label for="txt" class="standard_s_label">Text</label>
                <textarea name="txt" class="form-control standard_txtarea" id="txt" placeholder="Text"></textarea>
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <label class="input-group-text standard_select" for="txt_type">Text type</label>
                </div>
                <select class="custom-select standard_select" name="txt_type" id="txt_type">
                    <option value="p">Paragraph</option>
                    <option value="h1">H1</option>
                    <option value="h2">H2</option>
                </select>
            </div>
            <button id="add_text" class="standard_button">Add text</button>
            <label class="standard_s_label">Image</label>
            <form method="post" action="http://api.danban.dev.cc/file/store?file_type_id=1&user_id=1&is_in_use=1"
                  class="dropzone"
                  id="file-upload" enctype="multipart/form-data"></form>
        </div>
    </div>
</div>