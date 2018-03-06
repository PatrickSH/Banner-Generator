<div class="texts control card">
    <div class="card-header" id="headingOneEdit">
        <h5 class="mb-0">
            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOneEdit" aria-expanded="true" aria-controls="collapseOneEdit">
                Content
            </button>
        </h5>
    </div>
    <div id="collapseOneEdit" class="collapse" aria-labelledby="headingOneEdit" data-parent="#accordion">
        <div class="card-body">
            <div class="form-group txt_holder">
                <label for="txt">Text</label>
                <textarea name="txt" class="form-control" id="txt" placeholder="Text"></textarea>
            </div>
            <div class="input-group mb-3 txt_type_holder">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="txt_type">Text type</label>
                </div>
                <select class="custom-select" name="txt_type" id="txt_type">
                    <option value="p">Paragraph</option>
                    <option value="h1">H1</option>
                    <option value="h2">H2</option>
                </select>
            </div>
            <button id="add_text" class="btn btn-primary">Add text</button>
        </div>
    </div>
</div>