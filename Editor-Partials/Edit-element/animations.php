<div class="animation control card">
    <div class="card-header" id="animationAccordHEdit">
        <h5 class="mb-0">
            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#animationAccordEdit" aria-expanded="true" aria-controls="animationAccordHEdit">
                Animations
            </button>
        </h5>
    </div>
    <div id="animationAccordEdit" class="collapse" aria-labelledby="animationAccordHEdit" data-parent="#animationAccordEdit">
        <div class="card-body allAnimations">
            <div class="animationsHolder">
                <div class="animationBox fade_in" data-animation-name="fade_in">
                    Fade In
                </div>
                <div class="animationBox slide_in_left" data-animation-name="slide_in_left">
                    Slide in left
                </div>
                <div class="animationBox slide_in_right" data-animation-name="slide_in_right">
                    Slide in right
                </div>
            </div>
        </div>
        <div class="allAnimationSettings">
            <div class="current_animation_settings">
                <?php include 'Editor-Partials/Animations/slide_in_right.php'; ?>
                <?php include 'Editor-Partials/Animations/slide_in_left.php'; ?>
            </div>
        </div>
    </div>
</div>