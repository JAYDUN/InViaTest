
var Page1 = React.createClass({
    getInitialState : function(){
        return {}
    },
    render: function(){
        return (
            <div class="container">
                <div class="row clearfix">
                    <div class="col-md-12 column">
                        <div class="jumbotron">
                            <h1>
                                Hello, world!
                            </h1>
                            <p>
                                This is a template for a simple marketing or informational website. It includes a large callout called the hero unit and three supporting pieces of content. Use it as a starting point to create something more unique.
                            </p>
                            <p>
                                <a class="btn btn-primary btn-large" href="#">Learn more</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})

ReactDOM.render(
    <Page1/>, document.getElementById('page1')
)