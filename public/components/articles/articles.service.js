import CrudService from '../api/crud.service';

class Articles extends CrudService {
    get path() {return 'articles';}

}

export default Articles;