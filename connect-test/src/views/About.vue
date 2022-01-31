<template>
    <div class="about">
        <h1>This is an about page</h1>

        <form class="form" data-form-track="testing" onsubmit="return false;">
            <div class="container">
                <div class="row">
                    <div class="col-md-5 mx-auto">
                        <input class="form-control mt-5" type="text" value="" />

                        <select class="form-control mt-5 mb-5">
                            <option value="master">Master</option>
                            <option value="pick">Pick</option>
                            <option value="temp">Temp</option>
                        </select>

                        <button class="btn btn-success mt-5" type='submit'>Submit</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
