
namespace McCode.Web.Extensions
{
    public class ImageSizeCalcExtension
    {
        public static int ImageWidth(int rowWidth, int gridSize, int padding)
        {
            int width = ((rowWidth / 12) * gridSize) - padding;
            return width;
        }
    }
}
