import { environment as ENV } from 'src/environments/environment';

export const AppApi = {
  search: `${ENV.api}/sites/MLA/search?q=​:{filter}`,
  detail: `${ENV.api}/items/{id}`,
  description: `${ENV.api}/items/{id}/description`,
};
