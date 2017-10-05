namespace App { 

    interface ICollapseSection {
        parentPage: IParentPage;
        childrenOfCurrentPage: IChildrenOfCurrentPage[];
    }

    interface IParentPage {
        id: number;
        urlName: string;
        url: string;
        level: number;
        hasChildren: boolean;
    }

    interface ISection {
        id: number;
        urlName: string;
        url: string;
        level: number;
        hasChildren: boolean;
        onClick: (sectionData: ISection) => void;
    }

    interface IChildrenOfCurrentPage {
        id: number;
        urlName: string;
        url: string;
        level: number;
        children: IPage[];
        hasChildren: boolean;
    }

    const endPoint = 'umbraco/api/collapsemenu/getchildrenofpage/';
    const sectionClass = 'collapse-menu__section';
    const childrenClass = 'collapse-menu__children';

    class Section extends React.Component<ISection> {

        getSection = (event) => {
            event.preventDefault();

            axios.get(`${endPoint}?id=1276`)
                .then(resp => {
                    this.props.onClick(resp.data);
                });
        }

        render() {
            return (
                <li className={sectionClass}>
                    <a href={this.props.url}>{this.props.urlName}</a>
                    <button
                        role="button"
                        className="collapse-menu__btn collapse-menu__slide"
                        onClick={this.getSection}>get</button>                    
                    <ul className={childrenClass}>
                    </ul>
                </li>
            );
        }
    }

    //const SectionList = (props: ICollapseSection) => {
    //    return (
    //        <ul>
    //            <li><a href={props.parentPage.url}>{props.parentPage.urlName}</a></li>
    //            {props.childrenOfCurrentPage.map(section => <Section onClick key={section.id} {...section} />)}
    //        </ul>
    //    );
    //}

    //class RenderSection extends React.Component {



    //    render() {
    //        return (
    //            <SectionList parent sections={this.state.sections} />
    //        );
    //    }
    //}

    export class MenuSection {

        constructor(element: HTMLElement) {
            this.addMenuSection(element)
        }

        addMenuSection(element: HTMLElement) {
            const section = element.closest(`.${sectionClass}`)
            const renderAt = section.querySelector(`.${childrenClass}`);

            if (renderAt.children.length === 0) {
                element.addEventListener('click', function (event) {

                    ReactDOM.render(<Section />, renderAt);
                });
            }
        }
    }
}

(function () {
    var elements = document.querySelectorAll('.collapse-menu__btn');
    for (let i = 0; i < elements.length; i++){
        var init = new App.MenuSection(elements[i] as HTMLElement);
    }
})();