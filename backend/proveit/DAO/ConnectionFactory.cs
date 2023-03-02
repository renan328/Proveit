using MySql.Data.MySqlClient;

namespace proveit.DAO
{
    public class ConnectionFactory
    {
        public static MySqlConnection Build()
        {
            return new MySqlConnection("Server=localhost;Database=Proveit;Uid=root;Pwd=root;");
        }
    }
}
