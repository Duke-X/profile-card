import {express} from 'express';
import {dotenv} from 'dotenv';
import {cors} from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/Profile', async(req, res) => {
    
})