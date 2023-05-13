import Link from 'next/link';
import LoadingBox from '@/Components/LoadingBox/LoadingBox';
import ContainerProduct from '@/Components/ContainerProduct/ContainerProduct';
import ProductBox from '@/Components/ProductBox/ProductBox';
import TitleBox from '@/Components/TitleBox/TitleBox';
const CategoryBox = (props) => {

  return (
    <>
      <div className="category-box">
        <div className="container">
          <TitleBox text={`SEE OUR ${props.name}`} />
          {props.loading !== false ? (
            <LoadingBox />
          ) : props.status == 200 ? (
            <ContainerProduct>
              {props.products.length
                ? props.products.map((pro) => {

                  return (
                    <Link
                      href={"/detail/" + pro.id}
                      key={pro.id}
                    >
                      <ProductBox
                        img={pro.thumbnail}
                        price={pro.price}
                        discountPercentage={
                          pro.discountPercentage
                        }
                        category={
                          pro.category
                        }
                        id={pro.id}
                        name={pro.title}
                        brand={pro.brand}
                      />
                    </Link>
                  );

                })
                : null}
            </ContainerProduct>
          ) : (
            "Not found"
          )}

        </div>
      </div>


    </>
  );
}

export default CategoryBox;

