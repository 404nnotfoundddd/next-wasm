
script_dir="$(dirname "$(realpath "$0")")"
echo $script_dir
cd $script_dir

file_name="hello"
out_files_path="../../public"
in_files_path="../c"


echo "Setting up emsdk environment..."
source /home/notfound404/emsdk/emsdk_env.sh 

echo "Compiling code..."
emcc -o $out_files_path/$file_name.js $in_files_path/$file_name.c -O3 -s NO_EXIT_RUNTIME=0 -s EXPORTED_FUNCTIONS="['_myFunction']" -s "EXPORTED_RUNTIME_METHODS=['ccall']"
sed -i "s/Module/$file_name/g" $out_files_path/$file_name.js
