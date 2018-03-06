<div class="graphics control card">
    <div class="card-header" id="graphicsAccordHEdit">
        <h5 class="mb-0">
            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#graphicsAccordEdit" aria-expanded="true" aria-controls="collapseOneEdit">
                Graphics
            </button>
        </h5>
    </div>
    <div id="graphicsAccordEdit" class="collapse" aria-labelledby="graphicsAccordHEdit" data-parent="#accordionEdit">
        <div class="card-body">
            <div class="bg_color_holder">
                <label>Background color</label>
                <input type="color" name="bg_color" id="bg_color" placeholder="Background color"/>
            </div>
            <div class="file-upload_holder">
                <label>Image</label>
                <form method="post" action="http://api.danban.dev.cc/file/store?file_type_id=1&user_id=1&is_in_use=1"
                      class="dropzone"
                      id="file-upload" enctype="multipart/form-data"></form>
            </div>
            <div class="clear"></div>
            <div class="txt_color_holder">
                <label>Text color</label>
                <input type="color" name="txt_color" id="txt_color" placeholder="Text color"/>
            </div>
            <div class="txt_style_holder">
                <label>Text style</label>
                <select name="txt_style" id="txt_style">
                    <option value="blink">Blink</option>
                    <option value="dashed">Dashed</option>
                    <option value="dotted">Dotted</option>
                    <option value="double">Double</option>
                    <option value="line-through">Line-through</option>
                    <option value="overline">Overline</option>
                    <option value="underline">Underline</option>
                    <option value="wavy">Wavy</option>
                </select>
            </div>
            <div class="font_css_link_holder">
                <label>Font CSS link</label>
                <input type="text" name="font_css_link" id="font_css_link" placeholder="Font CSS link"/>
            </div>
            <div class="font_css_family_holder">
                <label>Font CSS Family</label>
                <input type="text" name="font_css_family" id="font_css_family" placeholder="Font CSS link"/>
            </div>
            <div class="rotation_holder">
                <label>Image rotation</label>
                <input type="number" name="rotation" id="rotation" placeholder="Rotate Deg"/>
            </div>

            <div class="image_width_holder">
                <label>Image width</label>
                <input type="number" name="image_width" id="image_width" placeholder="Image width"/>
            </div>

            <div class="blur_holder">
                <label>Blur percent</label>
                <input type="number" name="blur" id="blur" placeholder="Blur percent"/>
            </div>

            <div class="image_greyscale_holder">
                <label>Image greyscale percent</label>
                <input type="number" name="image_greyscale" id="image_greyscale" placeholder="Image greyscale"/>
            </div>

            <div class="element_opacity_holder">
                <label>Element Opacity</label>
                <input type="number" name="element_opacity" id="element_opacity" placeholder="Element Opacity"/>
            </div>
        </div>
    </div>
</div>